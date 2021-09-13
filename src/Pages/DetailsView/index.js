import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router';
import { getPerson } from '../../redux/PeopleSlice/thunks';
import { useStyles } from './styles';
import Preloader from '../../components/Preloader';

const DetailsView = memo(() => {
  const { isLoading, currentPerson, error } = useSelector(
    ({ people }) => people
  );

  const styles = useStyles();

  const { id } = useParams();
  const { push } = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPerson(id));
  }, [dispatch, id]);

  const renderRow = ({ value, title }) => {
    return (
      <Typography>
        {title}:&nbsp;
        {value?.length ? value.toString() : 'none'}
      </Typography>
    );
  };

  const handleRute = () => {
    push('/');
  };

  const renderContent = () => {
    if (error && !currentPerson && !isLoading) {
      return (
        <>
          <Typography variant="h5" component="h2">
            Error :(
          </Typography>
          <Typography>{error}</Typography>
        </>
      );
    }

    return (
      <>
        <Preloader isLoading={isLoading} />
        {currentPerson && !isLoading && (
          <div className={styles.contentWrapper}>
            <Typography variant="h5" component="h2">
              Person description
            </Typography>
            <Typography>Name: {currentPerson.name}</Typography>
            {renderRow({
              title: 'Species',
              value: currentPerson?.species?.map(({ name }) => name),
            })}
            {renderRow({
              title: 'Movies',
              value: currentPerson?.films?.map(({ title }) => title),
            })}
            {renderRow({
              title: 'Spaceships',
              value: currentPerson?.species?.map(({ name }) => name),
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <Layout elevation={0}>
      <Card className={styles.cartContainer}>
        <CardContent className={styles.contentContainer}>
          {renderContent()}
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" onClick={handleRute}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Layout>
  );
});

DetailsView.displayName = 'DetailsView';

export default DetailsView;
