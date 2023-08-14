import React from 'react'

function List({ user }) {
    return (
        <div>
            <div className="row">
                {user.map(data => (
                    <div className="col-md-4 animated fadeIn" key={data.id.value}>
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                    <img
                                        src={data.picture.large}
                                        className="card-img-top"
                                        alt=""
                                    />
                                </div>
                                <h5 className="card-title">
                                    {data.name.first +
                                        " " +
                                        data.name.last}
                                </h5>
                                <p className="card-text">
                                    {data.location.city +
                                        ", " +
                                        data.location.state}
                                    <br />
                                    <span className="phone">{data.phone}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default List