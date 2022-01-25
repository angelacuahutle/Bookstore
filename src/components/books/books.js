import React from 'react';

function Books() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form>
          <h2>Add a Book</h2>
          <input className="form-control" type="text" placeholder="Write a book" />
          <input className="form-control" type="text" placeholder="Write a Authot" />
        </form>
      </div>
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
        </table>
      </div>
    </>
  );
}
