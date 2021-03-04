import React from 'react'
import NumberFormat from "react-number-format";
import { useSelector, useDispatch } from "react-redux";


export default function Index() {

  const persons = useSelector((state) => state.persons);
  const typesummary = persons.typesummary


    return (
      <div className="row">
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-secondary">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-users text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_all.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_all.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-primary bg-darken-4">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-badge text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_a.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin" />
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_a.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-info">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-tag text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_b.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_b.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-success">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-shield text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_c.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_c.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-warning">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-hand-holding-medical text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_d.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_d.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-custom1">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-calendar text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_e.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_e.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-custom2">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-clock text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_f.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {typesummary  ? typesummary.type_f.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-danger">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-users text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typesummary  ? (
                        <NumberFormat
                          value={typesummary.type_other_and_null.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typesummary  ? " คน" : ""}
                    </h3>
                    <span>
                      {/* {typesummary  ? typesummary.person_type_other_and_null.label : null} */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
