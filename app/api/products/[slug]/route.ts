import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Props {
  params: Promise<{ slug: string }>;
  req : Request
}


export async function GET(req: Request, { params }: Props) {
  const {slug} = await params
  const product = await prisma.product.findUnique({
    where: {slug},
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}