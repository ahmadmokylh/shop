'use client';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import { ChevronDown } from 'lucide-react';

export default function DropdownWeight() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(['اختر من القائمة'])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replace(/_/g, ''),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="capitalize w-full p-4 border border-[#e2e2e2] rounded-lg text-right flex justify-between items-center">
          {selectedValue}
          <ChevronDown width={18} color="#5a3519" fill="#5a3519" />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) =>
          setSelectedKeys(new Set(keys as Set<string>))
        }
      >
        <DropdownItem key="250 جرام">{'250 جرام'}</DropdownItem>
        <DropdownItem key="500 جرام">{'500 جرام'}</DropdownItem>
        <DropdownItem key="1000 جرام">{'1000 جرام'}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
