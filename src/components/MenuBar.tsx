import React from 'react';
import { Link } from 'react-router-dom';
import { LanguagePicker } from './LanguagePicker';
import { useAppDictionary } from '../useAppDictionary';

export const MenuBar: React.FC = () => {
  const { t } = useAppDictionary();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              {t("menuBar.title")}
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/outils" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {t("menuBar.tools")}
            </Link>
            <LanguagePicker />
          </div>
        </div>
      </nav>
    </header>
  );
};
