import React from 'react';
import { ChevronDown } from 'lucide-react';

function CollapsibleSection({ title, children, isOpen, onToggle }) {
  return (
    <div className="card" style={{ marginBottom: 'var(--sp-4)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          marginBottom: isOpen ? 'var(--sp-5)' : 0,
        }}
        type="button"
        aria-expanded={isOpen}
      >
        <h2 className="section-header" style={{ margin: 0 }}>
          {title}
        </h2>
        <ChevronDown
          size={20}
          style={{
            color: 'var(--muted)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            display: 'grid',
            gap: 'var(--sp-4)',
            gridTemplateColumns: '1fr',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapsibleSection;
