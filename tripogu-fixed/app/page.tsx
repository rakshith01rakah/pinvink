export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';

// ✅ Disable SSR for map
const HeroMap = dynamicImport(() => import('@/components/hero-map'), {
ssr: false,
});

export default function HomePage() {
return (
<div style={{ padding: 20 }}> <h1>Tripogu is Live 🚀</h1> <p>Your deployment is successful.</p>

```
  <div style={{ marginTop: 20 }}>
    <HeroMap 
      title="Map Loading..." 
      subtitle="Map will render on client side"
    />
  </div>
</div>
```

);
}
