import React from 'react';
import AddBook from './CreateNewBook';

function Books() {
  return (
    <>
      <AddBook />
      <div className="d-flex justify-content-center mt-5">
        <table>
          <tr>
            <th>
              <b>
                &quot;Exquisite Mariposa: A Novel&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot; Fiona Alison Duncan&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;Exquisite Mariposa: A Novel&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot; Fiona Alison Duncan&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;Exquisite Mariposa: A Novel&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;Fiona Alison Duncan&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;Gifts&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;Ursula K. Le Guin&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;Gifts&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;Ursula K. Le Guin&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;Oval&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot; Elvia Wilk&quot;</th>

            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tfoot>
            <tr>
              <th>
                <b>
                  &quot;Oval&quot;
                </b>
              </th>
              <th>by</th>
              <th>&quot; Elvia Wilk&quot;</th>
              <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Books;
