import { FC, useEffect, useRef, useState } from 'react';
import { RxChevronDown as DropdownIcon } from 'react-icons/rx';

interface Props {
  onSelect: (item: any) => void;
  items: any[];
  selectedItem: any;
}

const Dropdown: FC<Props> = ({ items, onSelect, selectedItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (item: any) => {
    onSelect(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className='sm:w-full w-56 pb-0 relative border border-dark rounded-full bg-transparent text-dark'
    >
      <div
        onClick={() => setOpen(!open)}
        className='flex items-center justify-between gap-2 hover:cursor-pointer font-semibold pl-6 pr-4 py-2 sm:w-full w-56'
      >
        <p
          className={`${
            selectedItem ? 'opacity-100' : 'opacity-70'
          } lining-nums`}
        >
          {selectedItem.name}
        </p>
        <DropdownIcon className={`${open && 'rotate-180'} text-md`} />
      </div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute bg-dark bg-opacity-95 z-50 hover:cursor-pointer left-0 sm:w-full w-56 max-h-96 overflow-y-auto mt-1`}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className={`${
              selectedItem === item
                ? 'text-primary bg-opacity-70'
                : 'hover:bg-light hover:bg-opacity-5 hover:cursor-pointer text-light'
            } pl-4 py-2.5 px-2 first:rounded-t-md font-semibold lining-nums`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
