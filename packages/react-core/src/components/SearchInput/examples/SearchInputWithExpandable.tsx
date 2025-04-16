import { useState } from 'react';
import { Checkbox, SearchInput } from '@patternfly/react-core';

export const SearchInputWithExpandable: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRightAligned, setIsRightAligned] = useState(true);

  const toggleAlignment = (checked: boolean) => {
    setIsRightAligned(checked);
  }

  const onChange = (value: string) => {
    setValue(value);
  };

  const onToggleExpand = (_event: React.SyntheticEvent<HTMLButtonElement>, isExpanded: boolean) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Checkbox
        label="Right aligned"
        isChecked={isRightAligned}
        onChange={(_event, checked) => toggleAlignment(checked)}
        aria-label="show search right aligned"
        id="toggle-show-right-aligned"
        name="toggle-show-right-aligned"
      />
      <SearchInput
        aria-label="Search with expandable button example"
        className={`pf-m-expand-leftpf-v6-c-input-group-expandable pf-v6-u-justify-content-flex-end ${isExpanded && 'pf-m-expanded'}`}
        placeholder="Find by name"
        value={value}
        onChange={(_event, value) => onChange(value)}
        onClear={() => onChange('')}
        expandableInput={{ isExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }}
        isRightAligned={isRightAligned}
      />
    </>
  );
};
