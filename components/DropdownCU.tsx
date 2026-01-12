'use client';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';

export default function DropdownCU() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['KD']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replace(/_/g, ''),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" variant="bordered">
          {selectedValue}
        </Button>
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
        <DropdownItem key="KD">KD</DropdownItem>
        <DropdownItem key="ريال">ريال</DropdownItem>
        <DropdownItem key="BD">BD</DropdownItem>
        <DropdownItem key="JD">JD</DropdownItem>
        <DropdownItem key="USD">USD</DropdownItem>
        <DropdownItem key="AED">AED</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
