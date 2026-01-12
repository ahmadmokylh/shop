'use client';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import { ChevronDown } from 'lucide-react';

export default function DropdownFilter() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(['المضاف حديثا'])
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
        <DropdownItem key="السعر: من الاقل الى الاعلى">
          {'السعر: من الاقل الى الاعلى'}
        </DropdownItem>
        <DropdownItem key="السعر: من الاعلى الى الاقل">
          {'السعر: من الاعلى الى الاقل'}
        </DropdownItem>
        <DropdownItem key="المضاف حديثا">{'المضاف حديثا'}</DropdownItem>
        <DropdownItem key="الأكثر مبيعاً">{'الأكثر مبيعاً'}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
