import { useState, useEffect } from 'react';
import { X, Type, Minus, Plus } from 'lucide-react';

interface FontModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FontModal = ({ isOpen, onClose }: FontModalProps) => {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Inter');
  const [lineHeight, setLineHeight] = useState(1.6);

  const fontFamilies = [
    { name: 'Inter', value: 'Inter' },
    { name: 'Open Sans', value: 'Open Sans' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Poppins', value: 'Poppins' },
  ];

  useEffect(() => {
    // Load settings from localStorage
    const savedFontSize = localStorage.getItem('selybi-font-size');
    const savedFontFamily = localStorage.getItem('selybi-font-family');
    const savedLineHeight = localStorage.getItem('selybi-line-height');

    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedFontFamily) setFontFamily(savedFontFamily);
    if (savedLineHeight) setLineHeight(parseFloat(savedLineHeight));
  }, []);

  useEffect(() => {
    // Apply settings to document
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.style.fontFamily = fontFamily;
    document.documentElement.style.lineHeight = lineHeight.toString();

    // Save to localStorage
    localStorage.setItem('selybi-font-size', fontSize.toString());
    localStorage.setItem('selybi-font-family', fontFamily);
    localStorage.setItem('selybi-line-height', lineHeight.toString());
  }, [fontSize, fontFamily, lineHeight]);

  const adjustFontSize = (delta: number) => {
    setFontSize(prev => Math.max(12, Math.min(24, prev + delta)));
  };

  const adjustLineHeight = (delta: number) => {
    setLineHeight(prev => Math.max(1.2, Math.min(2.0, prev + delta)));
  };

  const resetToDefaults = () => {
    setFontSize(16);
    setFontFamily('Inter');
    setLineHeight(1.6);
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box glass-card max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading font-bold text-xl text-neutral flex items-center gap-2">
            <Type className="w-5 h-5" />
            Font Settings
          </h3>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Font Size */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Font Size</span>
              <span className="label-text-alt">{fontSize}px</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustFontSize(-1)}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="range range-primary flex-1"
              />
              <button
                onClick={() => adjustFontSize(1)}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Font Family */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Font Family</span>
            </label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="select select-bordered w-full"
            >
              {fontFamilies.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          {/* Line Height */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Line Height</span>
              <span className="label-text-alt">{lineHeight.toFixed(1)}</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustLineHeight(-0.1)}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="range"
                min="1.2"
                max="2.0"
                step="0.1"
                value={lineHeight}
                onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                className="range range-primary flex-1"
              />
              <button
                onClick={() => adjustLineHeight(0.1)}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Preview Text */}
          <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-sm text-neutral/70 mb-2">Preview:</p>
            <p style={{ fontFamily, fontSize: `${fontSize}px`, lineHeight }}>
              Selybi is building tomorrow's digital solutions today with innovative 
              software development and cutting-edge technology.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={resetToDefaults}
              className="btn btn-ghost flex-1"
            >
              Reset to Defaults
            </button>
            <button
              onClick={onClose}
              className="btn btn-primary flex-1"
            >
              Apply Settings
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default FontModal;