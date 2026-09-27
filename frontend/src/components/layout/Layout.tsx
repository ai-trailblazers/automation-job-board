import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-600">
        Forked from{' '}
        <a
          className="font-medium text-primary-700 underline hover:text-primary-800"
          href="https://github.com/Ctrl-Hire/automation-job-board"
          rel="noreferrer"
          target="_blank"
        >
          Ctrl-Hire&apos;s Automation Job Board
        </a>
        . Original work by Jake Kazi, Michael Martinez, and Edwin Renck.{' '}
        <a
          className="font-medium text-primary-700 underline hover:text-primary-800"
          href="https://github.com/ai-trailblazers/automation-job-board/blob/main/LICENSE"
          rel="noreferrer"
          target="_blank"
        >
          MIT License
        </a>
        .
      </footer>
    </div>
  );
}
