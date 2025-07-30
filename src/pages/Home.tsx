import { useEffect, useState } from 'react';

export const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <main className="p-6 mt-20">
      <h2 className="text-2xl mb-4">Products</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border rounded shadow hover:shadow-md transition">
            <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
            <h3 className="font-bold text-sm">{product.title}</h3>
            <p className="text-xs">{product.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
};
