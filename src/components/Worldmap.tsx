import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Office {
  id: string;
  city: string;
  country: string;
  position: { x: string; y: string }; // Position on the map image (percentage)
  type: 'headquarters' | 'office';
}

const WorldMap = () => {
  const offices: Office[] = [
    {
      id: '1',
      city: 'Helsinki',
      country: 'Finland', 
      position: { x: '54%', y: '25%' },
      type: 'headquarters'
    },
    {
      id: '2',
      city: 'Dubai',
      country: 'UAE',
      position: { x: '62%', y: '45%' },
      type: 'office'
    },
    {
      id: '3',
      city: 'Kuwait City',
      country: 'Kuwait',
      position: { x: '60%', y: '42%' },
      type: 'office'
    }
  ];

  const getMarkerColor = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return 'text-primary';
      case 'office':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };

  const getBadgeVariant = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return 'default';
      case 'office':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Global <span className="gradient-text">Presence</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          TrackOn AI operates worldwide with offices, partners, and deployments across continents
        </p>
      </div>

      <div className="relative  rounded-2xl p-8 overflow-hidden">
        <div className="relative">
          <img 
            src="/map3.png"
            alt="World Map showing TrackOn AI office locations" 
            className="w-full h-auto rounded-lg"
          />
          
          {/* Office markers */}
          {offices.map((office) => (
            <div
              key={office.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: office.position.x,
                top: office.position.y,
              }}
            >
              <div className={`relative ${getMarkerColor(office.type)}`}>
                <MapPin className="w-8 h-8 drop-shadow-lg animate-bounce" />
                <div className="absolute w-3 h-3 bg-current rounded-full top-1 left-1.5 animate-pulse" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <div className="font-semibold">{office.city}</div>
                <div className="text-sm text-muted-foreground">{office.country}</div>
                <Badge variant={getBadgeVariant(office.type)} className="text-xs mt-1">
                  {office.type === 'headquarters' ? 'HQ' : office.type}
                </Badge>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-background" />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm">Regional Offices</span>
          </div>
        </div>
      </div>

      {/* Office Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offices.map((office) => (
          <div
            key={office.id}
            className="bg-card/70 rounded-lg p-4 space-y-2 hover:bg-card transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{office.city}</div>
                <div className="text-sm text-muted-foreground">{office.country}</div>
              </div>
              <Badge variant={getBadgeVariant(office.type)} className="text-xs">
                {office.type === 'headquarters' ? 'HQ' : office.type}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;