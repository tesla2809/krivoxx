import { Check, X } from 'lucide-react';
import { pricingPackages } from '@/lib/data/pricing';
import { formatCurrency } from '@/lib/utils/formatters';

export function PricingTable() {
  const allFeatures = Array.from(
    new Set(pricingPackages.flatMap(pkg => pkg.features.map(f => f.name)))
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50 border">Features</th>
            {pricingPackages.map(pkg => (
              <th key={pkg.id} className="p-4 text-center bg-gray-50 border">
                <div className="font-bold text-lg">{pkg.name}</div>
                <div className="text-sm font-normal text-gray-600">{formatCurrency(pkg.price)}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((featureName, index) => (
            <tr key={index} className="border-b">
              <td className="p-4 font-medium">{featureName}</td>
              {pricingPackages.map(pkg => {
                const feature = pkg.features.find(f => f.name === featureName);
                return (
                  <td key={pkg.id} className="p-4 text-center border">
                    {feature?.included ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}