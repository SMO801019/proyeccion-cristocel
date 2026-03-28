'use client';

import { ChangeEvent } from 'react';

type ChurchFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  selectedCountry: string;
  countries: string[];
  onCountryChange: (value: string) => void;
};

export function ChurchFilters({
  query,
  onQueryChange,
  selectedCountry,
  countries,
  onCountryChange
}: ChurchFiltersProps) {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onCountryChange(event.target.value);
  };

  return (
    <section className="filters" aria-label="Filtros de iglesias">
      <input
        type="search"
        placeholder="Buscar por nombre, ciudad o etiqueta"
        value={query}
        onChange={handleInput}
      />

      <select value={selectedCountry} onChange={handleSelect}>
        <option value="all">Todos los países</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </section>
  );
}
