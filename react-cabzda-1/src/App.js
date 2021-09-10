import s from  './App.module.css';
import People from './components/people/People';
import Headers from './components/header/Headers';
import PeopleRight from './components/content/peopleRight/peopleRight';
import ContentRight from './components/content/contentRight/contentText';
import { BrowserRouter, Route } from 'react-router-dom';
import InfoCont from './components/content/InfoContent/InfoCont';
import DialogsCont from './components/content/dialogs/dialogsCont';
import RegisterCont from './components/content/register/registerCont';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className={s.container}>
        <Headers />
        <div className={s.display}>
          <People />
          <div className={s.display_content}>
                <Route path='/profile' render={ ()  => <PeopleRight postData={props.state.peopleRightMessage.postData}
                                                                    store={props.store} />} />

                <Route path='/content' render={ ()  => <ContentRight />} />
                <Route path='/info' render={ ()  => <InfoCont />} />
                <Route path='/dialogs' render={ ()  => <DialogsCont dialogsData={props.state.dialogsMessage.dialogsData}/>} />
                <Route path='/register' render={ ()  => <RegisterCont />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
