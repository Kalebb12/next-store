import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const newProducts = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 4,
    });

    return NextResponse.json(newProducts);
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
