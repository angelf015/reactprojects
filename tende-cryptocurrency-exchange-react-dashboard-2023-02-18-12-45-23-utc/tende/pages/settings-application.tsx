import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/SettingsLayouts";

const SettingsApplication: NextPage = () => {
  return (
    <SettingsLayouts name="Application">
      <div className="card-body">
        <div className="row">
          <div className="col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Preperences</h4>
              </div>
              <div className="card-body">
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Language Default</label>
                      <select className="form-select">
                        <option value="">English</option>
                        <option value="">Bangla</option>
                        <option value="">Hindi</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Currency Default</label>
                      <select className="form-select">
                        <option value="">USD</option>
                        <option value="">CAD</option>
                        <option value="">Euro</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Theme Default</label>
                      <select className="form-select">
                        <option value="">Light</option>
                        <option value="">Dark</option>
                        <option value="">Blue</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Time Zone</label>
                      <select className="form-select">
                        <option>
                          (GMT-12:00) International Date Line West
                        </option>
                        <option>(GMT-11:00) Midway Island, Samoa</option>
                        <option>(GMT-10:00) Hawaii</option>
                        <option>(GMT-09:00) Alaska</option>
                        <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                        <option>(GMT-08:00) Tijuana, Baja California</option>
                        <option>GMT-07:00) Arizona</option>
                        <option>(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                        <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                        <option>GMT-06:00) Central America</option>
                        <option>(GMT-06:00) Central Time (US & Canada)</option>
                        <option>
                          (GMT-06:00) Guadalajara, Mexico City, Monterrey
                        </option>
                        <option>GMT-06:00) Saskatchewan</option>
                        <option>
                          GMT-05:00) Bogota, Lima, Quito, Rio Branco
                        </option>
                        <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                        <option>(GMT-05:00) Indiana (East)</option>
                        <option>(GMT-04:00) Atlantic Time (Canada)</option>
                        <option>GMT-04:00) Caracas, La Paz</option>
                        <option>GMT-04:00) Manaus</option>
                        <option>(GMT-04:00) Santiago</option>
                        <option>(GMT-03:30) Newfoundland</option>
                        <option>(GMT-03:00) Brasilia</option>
                        <option>GMT-03:00) Buenos Aires, Georgetown</option>
                        <option>(GMT-03:00) Greenland</option>
                        <option>(GMT-03:00) Montevideo</option>
                        <option>(GMT-02:00) Mid-Atlantic</option>
                        <option>GMT-01:00) Cape Verde Is.</option>
                        <option>(GMT-01:00) Azores</option>
                        <option>
                          MT+00:00) Casablanca, Monrovia, Reykjavik
                        </option>
                        <option>
                          GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh,
                          Lisbon, London
                        </option>
                        <option>
                          GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm,
                          Vienna
                        </option>
                        <option>
                          GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,
                          Prague
                        </option>
                        <option>
                          GMT+01:00) Brussels, Copenhagen, Madrid, Paris
                        </option>
                        <option>
                          GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                        </option>
                        <option>GMT+01:00) West Central Africa</option>
                        <option>GMT+02:00) Amman</option>
                        <option>GMT+02:00) Athens, Bucharest, Istanbul</option>
                        <option>GMT+02:00) Beirut</option>
                        <option>GMT+02:00) Cairo</option>
                        <option>MT+02:00) Harare, Pretoria</option>
                        <option>
                          GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn,
                          Vilnius
                        </option>
                        <option>GMT+02:00) Jerusalem</option>
                        <option>GMT+02:00) Minsk</option>
                        <option>GMT+02:00) Windhoek</option>
                        <option>MT+03:00) Kuwait, Riyadh, Baghdad</option>
                        <option>
                          GMT+03:00) Moscow, St. Petersburg, Volgograd
                        </option>
                        <option>MT+03:00) Nairobi</option>
                        <option>MT+03:00) Tbilisi</option>
                        <option>(GMT+03:30) Tehran</option>
                        <option>MT+04:00) Abu Dhabi, Muscat</option>
                        <option>GMT+04:00) Baku</option>
                        <option>GMT+04:00) Yerevan</option>
                        <option>(GMT+04:30) Kabul</option>
                        <option>GMT+05:00) Yekaterinburg</option>
                        <option>MT+05:00) Islamabad, Karachi, Tashkent</option>
                        <option>(GMT+05:30) Sri Jayawardenapura</option>
                        <option>
                          (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                        </option>
                        <option>(GMT+05:45) Kathmandu</option>
                        <option>GMT+06:00) Almaty, Novosibirsk</option>
                        <option>MT+06:00) Astana, Dhaka</option>
                        <option>(GMT+06:30) Yangon (Rangoon)</option>
                        <option>MT+07:00) Bangkok, Hanoi, Jakarta</option>
                        <option>GMT+07:00) Krasnoyarsk</option>
                        <option>
                          MT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
                        </option>
                        <option>MT+08:00) Kuala Lumpur, Singapore</option>
                        <option>MT+08:00) Irkutsk, Ulaan Bataar</option>
                        <option>MT+08:00) Perth</option>
                        <option>MT+08:00) Taipei</option>
                        <option>MT+09:00) Osaka, Sapporo, Tokyo</option>
                        <option>MT+09:00) Seoul</option>
                        <option>GMT+09:00) Yakutsk</option>
                        <option>(GMT+09:30) Adelaide</option>
                        <option>(GMT+09:30) Darwin</option>
                        <option>GMT+10:00) Brisbane</option>
                        <option>(GMT+10:00) Canberra, Melbourne, Sydney</option>
                        <option>(GMT+10:00) Hobart</option>
                        <option>GMT+10:00) Guam, Port Moresby</option>
                        <option>(GMT+10:00) Vladivostok</option>
                        <option>
                          (GMT+11:00) Magadan, Solomon Is., New Caledonia
                        </option>
                        <option>(GMT+12:00) Auckland, Wellington</option>
                        <option>
                          (GMT+12:00) Fiji, Kamchatka, Marshall Is.
                        </option>
                        <option>(GMT+13:00) {`Nuku'alofa`}</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-success pl-5 pr-5 waves-effect">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card mb-0">
              <div className="card-header">
                <h4 className="card-title">Notifications</h4>
              </div>
              <div className="card-body">
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="col-lg-6">
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="s1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="s1">
                        I send or receive digital currency
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="s2"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="s2">
                        I receive merchant order
                      </label>
                    </div>
                    <div className="form-check form-switch mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="s3"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="s3">
                        There are recommendation for my sccount
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-success waves-effect">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsApplication;
