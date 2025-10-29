import React from 'react';

function Header({ onReset, onSaveAndSend }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--sp-4) var(--sp-6)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        <h1 className="page-title">Meta Business Portfolio Recovery</h1>

        <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
          <button
            className="btn btn--ghost"
            onClick={onReset}
            type="button"
          >
            Reset
          </button>
          <button
            className="btn btn--primary"
            onClick={onSaveAndSend}
            type="button"
          >
            Save & Send
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
