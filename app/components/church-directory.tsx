'use client';

import { useMemo, useState } from 'react';
import { churches } from '@/app/data/churches';
import { ChurchCard } from '@/app/components/church-card';
import { ChurchFilters } from '@/app/components/church-filters';

export function ChurchDirectory() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('all');

  const countries = useMemo(
    () => [...new Set(churches.map((church) => church.country))].sort(),
    []
  );

  const filtered = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();

    return churches.filter((church) => {
      const matchesCountry = country === 'all' || church.country === country;
      const matchesQuery =
        lowerQuery.length === 0 ||
        church.name.toLowerCase().includes(lowerQuery) ||
        church.city.toLowerCase().includes(lowerQuery) ||
        church.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

      return matchesCountry && matchesQuery;
    });
  }, [country, query]);

  return (
    <main className="container">
      <header className="hero">
        <h1>Directorio de Iglesias</h1>
        <p>
          Base escalable para publicar congregaciones por país, ciudad y áreas
          de interés.
        </p>
      </header>

      <ChurchFilters
        query={query}
        onQueryChange={setQuery}
        selectedCountry={country}
        countries={countries}
        onCountryChange={setCountry}
      />

      <section className="meta">
        <strong>{filtered.length}</strong> resultado(s)
      </section>

      <section className="grid" aria-live="polite">
        {filtered.map((church) => (
          <ChurchCard key={church.id} church={church} />
        ))}
      </section>
    </main>
  );
}
