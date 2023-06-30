import './CodeJournal.css';
import { useState } from 'react';

export default function CodeJournal() {
  const [viewState, setViewState] = useState(true);

  function handleEntries() {
    setViewState(!viewState);
  }

  return (
    <div className="light-gray">
      <NavBar entriesclick={handleEntries} />
      <main>
        <JournalInputs />
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

function JournalInputs() {
  return (
    <div className="container" data-view="entry-form">
      <InputViewTitle text={'New Input'} />
      <form id="entryForm">
        <div className="row margin-bottom-1">
          <Image imgSrc={'CHANGE THIS LATER!'} />
          <div className="column-half">
            <TitleInput />
            <PhotoURLInput />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <NotesInput />
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <Button
              text="DELETE"
              customClass="invisible delete-entry-button"
              onCustomClick={'CHANGE THIS LATER!'}
            />
            <Button
              text="SAVE"
              customClass="input-b-radius text-padding purple-background white-text"
              onCustomClick={'CHANGE HTIS LATER!'}
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

function TitleInput() {
  return (
    <>
      <label className="margin-bottom-1 d-block">Title</label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
      />
    </>
  );
}

function PhotoURLInput() {
  return (
    <>
      <label className="margin-bottom-1 d-block">Photo URL</label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formURL"
        name="formURL"
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

function NotesInput() {
  return (
    <>
      <label className="margin-bottom-1 d-block">Notes</label>
      <textarea
        required
        className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
        name="formNotes"
        id="formNotes"
        cols="30"
        rows="10"></textarea>
    </>
  );
}

function Button({ text, customClass, onCustomClick }) {
  return (
    <button className={customClass} type="button" onClick={onCustomClick}>
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
  // const renderedList = entries.map(element => '...');  // some map over our entries...
  // return (<ul className="entry-ul" id="entryUl">{renderedList}</ul>)
}
