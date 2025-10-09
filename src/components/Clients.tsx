import { Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const clients = [
  { id: 1, name: "Cliente 1", logo: "/images/clients/client1.png" },
  { id: 2, name: "Cliente 2", logo: "/images/clients/client2.png" },
  { id: 3, name: "Cliente 3", logo: "/images/clients/client3.png" },
  { id: 4, name: "Cliente 4", logo: "/images/clients/client4.png" },
  { id: 5, name: "Cliente 5", logo: "/images/clients/client5.png" },
  { id: 6, name: "Cliente 6", logo: "/images/clients/client6.png" },
  { id: 7, name: "Cliente 7", logo: "/images/clients/client7.png" },
  { id: 8, name: "Cliente 8", logo: "/images/clients/client8.png" },
  { id: 9, name: "Cliente 9", logo: "/images/clients/client9.png" },
  { id: 10, name: "Cliente 10", logo: "/images/clients/client10.png" },
];

const Clients = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que confiam na Konsilo para transformar seus negócios
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <Card
              key={client.id}
              className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to icon if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-icon')) {
                      const icon = document.createElement('div');
                      icon.className = 'fallback-icon text-muted-foreground';
                      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>';
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
