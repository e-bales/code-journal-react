import './CodeJournal.css';
import { useState } from 'react';

export default function CodeJournal() {
  const [viewState, setViewState] = useState(true);
  const [titleState, setTitleState] = useState('');
  const [urlState, setUrlState] = useState('');
  const [noteState, setNoteState] = useState('');

  function handleSave(event) {
    event.preventDefault();
    // const formValues = {
    //   title: titleState,
    //   photoUrl: urlState,
    //   notes: noteState,
    // };
    console.log(titleState, urlState, noteState);
  }

  function handleTitle(event) {
    setTitleState(event.target.value);
    console.log(titleState);
  }

  function handleUrl(event) {
    setUrlState(event.target.value);
    console.log(urlState);
  }

  function handleNote(event) {
    setNoteState(event.target.value);
    console.log(noteState);
  }

  function handleEntries() {
    setViewState(!viewState);
  }

  return (
    <div className="light-gray">
      <NavBar entriesclick={handleEntries} />
      <main>
        <JournalInputs
          save={handleSave}
          newTitle={handleTitle}
          newUrl={handleUrl}
          newNote={handleNote}
        />
        <JournalEntries />
      </main>
    </div>
  );
}

function NavBar({ entriesClick }) {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <div
                id="entriesLink"
                className="entries-link white-text"
                onClick={entriesClick}>
                Entries
              </div>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

function JournalInputs({ save, newTitle, newUrl, newNote }) {
  return (
    <div className="container" data-view="entry-form">
      <InputViewTitle text={'New Input'} />
      <form id="entryForm" onSubmit={save}>
        <div className="row margin-bottom-1">
          <Image imgSrc={'CHANGE THIS LATER!'} />
          <div className="column-half">
            <TitleInput title={newTitle} />
            <PhotoURLInput url={newUrl} />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <NotesInput note={newNote} />
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            {/* <Button
              text="DELETE"
              customClass="invisible delete-entry-button"
              onCustomClick={'CHANGE THIS LATER!'}
            /> */}
            {/* <Button
              text="SAVE"
              customClass="input-b-radius text-padding purple-background white-text"
              onCustomClick={save}
            /> */}
            <SaveButton
              text="SAVE"
              customClass="input-b-radius text-padding purple-background white-text"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function InputViewTitle({ text }) {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between">
        <h1 id="formH1">{text}</h1>
      </div>
    </div>
  );
}

function TitleInput({ title }) {
  return (
    <>
      <label className="margin-bottom-1 d-block">Title</label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
        onChange={title}
      />
    </>
  );
}

function PhotoURLInput({ url }) {
  return (
    <>
      <label className="margin-bottom-1 d-block">Photo URL</label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formURL"
        name="formURL"
        onChange={url}
      />
    </>
  );
}

function Image({ imgSrc }) {
  return (
    <div className="column-half">
      <img
        className="input-b-radius form-image"
        id="formImage"
        src={imgSrc}
        alt="entry"
      />
    </div>
  );
}

function NotesInput({ note }) {
  return (
    <>
      <label className="margin-bottom-1 d-block">Notes</label>
      <textarea
        required
        className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
        name="formNotes"
        id="formNotes"
        cols="30"
        rows="10"
        onChange={note}></textarea>
    </>
  );
}

function Button({ text, customClass, onCustomClick }) {
  return (
    <button className={customClass} type="submit" onClick={onCustomClick}>
      {text}
    </button>
  );
}

function SaveButton({ text, customClass }) {
  return (
    <button className={customClass} type="submit">
      {text}
    </button>
  );
}

function JournalEntries() {
  return (
    <div className="container hidden" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <Button
            text="NEW"
            customClass="white-text form-link"
            onCustomClick={'CHANGE THIS LATER!'}
          />
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <EntryComponentList entries="CHANGE THIS LATER!" />
        </div>
      </div>
    </div>
  );
}

function EntryComponentList({ entries }) {
  return;
}

function renderEntry({ title, note, source }) {
  return (
    <li data-entry-id="">
      <div class="row">
        <div class="column-half">
          <img class="input-b-radius form-image" src={source} alt=""></img>
        </div>
        <div class="column-half">
          <div class="row">
            <div class="column-full d-flex justify-between">
              <h3>{title}</h3>
              <i class="fa-solid fa-pencil"></i>
            </div>
          </div>
          <p>{note}</p>
        </div>
      </div>
    </li>
  );
}
