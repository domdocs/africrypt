import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select();
    
    if (error) {
      // Check for duplicate email (unique constraint violation)
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You\'re already on the waitlist!' },
          { status: 200 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Success! You have been added to the waitlist.', data },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}