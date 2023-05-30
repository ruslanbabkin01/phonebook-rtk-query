import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function changeFilter(e) {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  }

  return (
    <FilterLabel htmlFor="filter">
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        placeholder="Enter name"
        onChange={changeFilter}
      />
    </FilterLabel>
  );
};
