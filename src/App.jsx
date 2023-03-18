import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="title">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactList />
    </Layout>
  );
}
