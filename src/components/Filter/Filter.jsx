import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function changeFilter(e) {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  }

  return (
    <FilterLabel htmlFor="filter">
      Find contacs by name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={changeFilter}
      />
    </FilterLabel>
  );
};
