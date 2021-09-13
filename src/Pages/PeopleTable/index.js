import React, { memo, useCallback, useEffect } from 'react';
import Layout from '../../components/Layout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/PeopleSlice/thunks';
import { ROW_PER_PAGE } from './constants';
import TableCell from '@material-ui/core/TableCell';
import Row from './Row';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './styles';
import Preloader from '../../components/Preloader';
import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';

const PeopleTable = memo(() => {
  const { count, page, people, isLoading, error } = useSelector(
    ({ people }) => people
  );
  const dispatch = useDispatch();

  const styles = useStyles();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleChangePage = useCallback(
    (_, page) => {
      dispatch(getData(page));
    },
    [dispatch]
  );

  const renderRow = (item, i) => <Row key={item.url} data={item} />;

  const renderError = () =>
    Boolean(!isLoading && !people.length && error) && (
      <>
        <TableCell className={styles.errorHint} colSpan={5}>
          <Typography variant="h5" component="h2">
            Error :(
          </Typography>
          <Typography>{error}</Typography>
        </TableCell>
      </>
    );

  return (
    <Layout classes={{ paper: styles.paper, container: styles.container }}>
      <TableContainer className={styles.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of birthday</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Height</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people?.map(renderRow)}
            {renderError()}
          </TableBody>
        </Table>
        <Preloader isLoading={isLoading} />
      </TableContainer>
      <TablePagination
        count={count || 0}
        rowsPerPageOptions={[]}
        rowsPerPage={ROW_PER_PAGE}
        page={page}
        component="div"
        onPageChange={handleChangePage}
      />
      <SideBar />
    </Layout>
  );
});

PeopleTable.displayName = 'PeopleTable';

export default PeopleTable;
