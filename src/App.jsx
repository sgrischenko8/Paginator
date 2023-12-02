import { useState } from 'react';
import { Paginator } from './components/Paginator/Paginator';

function App() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const arrayToPaginate = [...days, ...days, ...days, ...days, ...days];

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [isPageCountKnown, setIsPageCountKnown] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const pageCount = isPageCountKnown
    ? Math.ceil(arrayToPaginate.length / limit)
    : null;

  const arrayToRender = arrayToPaginate.slice(
    limit * (currentPage - 1),
    limit * currentPage,
  );

  return (
    <>
      <form>
        <label>
          Limit
          <input
            value={limit}
            type="text"
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        <label>
          Page Count undefined
          <input
            type="checkbox"
            onChange={() => setIsPageCountKnown((prev) => !prev)}
          />
        </label>
        <label>
          Dark theme
          <input
            type="checkbox"
            onChange={() => setIsDarkTheme((prev) => !prev)}
          />
        </label>
      </form>
      <ul>
        {arrayToRender.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

      <Paginator
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageCount={pageCount}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
}
export default App;
