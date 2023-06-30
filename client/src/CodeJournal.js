import './CodeJournal.css';
import { useState } from 'react';

export default function CodeJournal() {
  const [viewState, setViewState] = useState(true);

  function handleEntries() {
    setViewState(!viewState);
  }

  return (
    <NavBar entriesclick={handleEntries} />
    // <JournalInputs />
    // <JournalEntries />
    // <Button />
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
  return <form></form>;
}

function Title() {
  return (
    <>
      <label class="margin-bottom-1 d-block" for="title">
        Title
      </label>
      <input
        required
        class="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
      />
    </>
  );
}

function PhotoURL() {
  return (
    <>
      <label class="margin-bottom-1 d-block" for="photoUrk">
        Photo URL
      </label>
      <input
        required
        class="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formURL"
        name="formURL"
      />
    </>
  );
}

function Notes() {
  return (
    <>
      <label class="margin-bottom-1 d-block" for="formNotes">
        Notes
      </label>
      <textarea
        required
        class="input-b-color text-padding input-b-radius purple-outline d-block width-100"
        name="formNotes"
        id="formNotes"
        cols="30"
        rows="10"></textarea>
    </>
  );
}
