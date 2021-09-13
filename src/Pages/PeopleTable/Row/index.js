import React, { memo, useMemo } from 'react';
import { PersonProp } from '../../../constants/propTypes';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useHistory } from 'react-router';
import { useStyles } from './styles';

const Row = memo(props => {
  const { data } = props;
  const { name, gender, birth_year, height, mass, url } = data;

  const { push } = useHistory();

  const styles = useStyles();

  const idOfCurrentPerson = useMemo(() => {
    const splittingArray = url.split('/');

    return splittingArray[splittingArray.length - 2];
  }, [url]);

  const handleRoute = () => {
    push(`/${idOfCurrentPerson}`);
  };

  const handleDragStart = e => {
    e.stopPropagation();

    e.dataTransfer.setData('name', name);
  };

  return (
    <TableRow
      onDrag={handleDragStart}
      onDragStart={handleDragStart}
      onClick={handleRoute}
      draggable
      className={styles.tableRow}
    >
      <TableCell>{name}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{birth_year}</TableCell>
      <TableCell>{mass}</TableCell>
      <TableCell>{height}</TableCell>
    </TableRow>
  );
});

Row.displayName = 'Row';

Row.propTypes = {
  data: PersonProp,
};

export default Row;
