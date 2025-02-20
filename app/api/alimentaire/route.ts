import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    const record = await prisma.alimentaire.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        size: parseInt(body.size),
        age: parseInt(body.age),
        weight: parseFloat(body.weight),
        userId: session.user.id,
      },
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error('Error creating record:', error);
    return NextResponse.json(
      { error: 'Error creating record' },
      { status: 500 }
    );
  }
} 