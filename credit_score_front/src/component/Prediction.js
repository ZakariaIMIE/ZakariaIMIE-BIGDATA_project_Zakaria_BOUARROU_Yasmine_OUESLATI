
import '../App.css';
import Statistics from './Statistics.js';

//importation du composant form en interne

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// mon boostrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Form, FormControl, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';



function Prediction() {

    /*   ********** */
    const [solvable, setSolvable]=useState(false);
    const [nosolvable ,setnosolvable]=useState(false);




    const hasardOperation = () => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            setSolvable(true);
            setnosolvable(false);
        } else {
            setnosolvable(true);
            setSolvable(false);
        }
    };


        // State to control the active tab
    const [activeTab, setActiveTab] = useState("televerse");

    useEffect(() => {
        // Set the default active tab when component mounts
        setActiveTab("televerse");
    }, []);

    /// disparaitre le solvable : 
    useEffect(() => {
        const interval = setInterval(() => {
            setSolvable(false);
            setnosolvable(false);
        }, 1600); // 500 millisecondes 

        // Nettoyage de l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="page-2">                  
                    <Tabs
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        id="uncontrolled-tab-example"

                    >
                        <Tab eventKey="televerse" title="Téléversé" className="menu2">
                            <h6> Prédiction utilisant un fichier téléversé - Upload </h6>
                                <br />
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Control type="file" size="lg" />
                                </Form.Group>
                                <br />                             
                        </Tab>

                        <Tab eventKey="prediction" title="Formulaire">
                            <h6> Prédiction en repmlissant le formulaire - Form </h6>
                            <br />
                                  <Form>
                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridNameTypeSuite">
                                        <Form.Label>NAME_TYPE_SUITE</Form.Label>
                                        <Form.Control placeholder="Enter NAME_TYPE_SUITE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridOccupationType">
                                        <Form.Label>OCCUPATION_TYPE</Form.Label>
                                        <Form.Control placeholder="Enter OCCUPATION_TYPE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridFondkapremontMode">
                                        <Form.Label>FONDKAPREMONT_MODE</Form.Label>
                                        <Form.Control placeholder="Enter FONDKAPREMONT_MODE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridHousetypeMode">
                                        <Form.Label>HOUSETYPE_MODE</Form.Label>
                                        <Form.Control placeholder="Enter HOUSETYPE_MODE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridWallmaterialMode">
                                        <Form.Label>WALLSMATERIAL_MODE</Form.Label>
                                        <Form.Control placeholder="Enter WALLSMATERIAL_MODE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridEmergencystateMode">
                                        <Form.Label>EMERGENCYSTATE_MODE</Form.Label>
                                        <Form.Control placeholder="Enter EMERGENCYSTATE_MODE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridCommonareaAvg">
                                        <Form.Label>COMMONAREA_AVG</Form.Label>
                                        <Form.Control placeholder="Enter COMMONAREA_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridNonlivingapartmentsAvg">
                                        <Form.Label>NONLIVINGAPARTMENTS_AVG</Form.Label>
                                        <Form.Control placeholder="Enter NONLIVINGAPARTMENTS_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridLivingapartmentsAvg">
                                        <Form.Label>LIVINGAPARTMENTS_AVG</Form.Label>
                                        <Form.Control placeholder="Enter LIVINGAPARTMENTS_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridFloorsminAvg">
                                        <Form.Label>FLOORSMIN_AVG</Form.Label>
                                        <Form.Control placeholder="Enter FLOORSMIN_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridYearsBuildAvg">
                                        <Form.Label>YEARS_BUILD_AVG</Form.Label>
                                        <Form.Control placeholder="Enter YEARS_BUILD_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridOwnCarAge">
                                        <Form.Label>OWN_CAR_AGE</Form.Label>
                                        <Form.Control placeholder="Enter OWN_CAR_AGE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridLandareaAvg">
                                        <Form.Label>LANDAREA_AVG</Form.Label>
                                        <Form.Control placeholder="Enter LANDAREA_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridBasementareaAvg">
                                        <Form.Label>BASEMENTAREA_AVG</Form.Label>
                                        <Form.Control placeholder="Enter BASEMENTAREA_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridExtSource1">
                                        <Form.Label>EXT_SOURCE_1</Form.Label>
                                        <Form.Control placeholder="Enter EXT_SOURCE_1" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridNonlivingareaAvg">
                                        <Form.Label>NONLIVINGAREA_AVG</Form.Label>
                                        <Form.Control placeholder="Enter NONLIVINGAREA_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridElevatorsAvg">
                                        <Form.Label>ELEVATORS_AVG</Form.Label>
                                        <Form.Control placeholder="Enter ELEVATORS_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridApartmentsAvg">
                                        <Form.Label>APARTMENTS_AVG</Form.Label>
                                        <Form.Control placeholder="Enter APARTMENTS_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridEntrancesAvg">
                                        <Form.Label>ENTRANCES_AVG</Form.Label>
                                        <Form.Control placeholder="Enter ENTRANCES_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridLivingareaAvg">
                                        <Form.Label>LIVINGAREA_AVG</Form.Label>
                                        <Form.Control placeholder="Enter LIVINGAREA_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridFloorsmaxAvg">
                                        <Form.Label>FLOORSMAX_AVG</Form.Label>
                                        <Form.Control placeholder="Enter FLOORSMAX_AVG" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridYearsBeginexploitationAvg">
                                        <Form.Label>YEARS_BEGINEXPLUATATION_AVG</Form.Label>
                                        <Form.Control placeholder="Enter YEARS_BEGINEXPLUATATION_AVG" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridTotalareaMode">
                                        <Form.Label>TOTALAREA_MODE</Form.Label>
                                        <Form.Control placeholder="Enter TOTALAREA_MODE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridExtSource3">
                                        <Form.Label>EXT_SOURCE_3</Form.Label>
                                        <Form.Control placeholder="Enter EXT_SOURCE_3" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauHour">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_HOUR</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_HOUR" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauWeek">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_WEEK</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_WEEK" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauDay">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_DAY</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_DAY" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauMon">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_MON</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_MON" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauQrt">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_QRT</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_QRT" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridAmtReqCreditBureauYear">
                                        <Form.Label>AMT_REQ_CREDIT_BUREAU_YEAR</Form.Label>
                                        <Form.Control placeholder="Enter AMT_REQ_CREDIT_BUREAU_YEAR" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridDef30CntSocialCircle">
                                        <Form.Label>DEF_30_CNT_SOCIAL_CIRCLE</Form.Label>
                                        <Form.Control placeholder="Enter DEF_30_CNT_SOCIAL_CIRCLE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridObs60CntSocialCircle">
                                        <Form.Label>OBS_60_CNT_SOCIAL_CIRCLE</Form.Label>
                                        <Form.Control placeholder="Enter OBS_60_CNT_SOCIAL_CIRCLE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridDef60CntSocialCircle">
                                        <Form.Label>DEF_60_CNT_SOCIAL_CIRCLE</Form.Label>
                                        <Form.Control placeholder="Enter DEF_60_CNT_SOCIAL_CIRCLE" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridObs30CntSocialCircle">
                                        <Form.Label>OBS_30_CNT_SOCIAL_CIRCLE</Form.Label>
                                        <Form.Control placeholder="Enter OBS_30_CNT_SOCIAL_CIRCLE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridExtSource2">
                                        <Form.Label>EXT_SOURCE_2</Form.Label>
                                        <Form.Control placeholder="Enter EXT_SOURCE_2" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridAmtGoodsPrice">
                                        <Form.Label>AMT_GOODS_PRICE</Form.Label>
                                        <Form.Control placeholder="Enter AMT_GOODS_PRICE" />
                                      </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                      <Form.Group as={Col} controlId="formGridAmtAnnuity">
                                        <Form.Label>AMT_ANNUITY</Form.Label>
                                        <Form.Control placeholder="Enter AMT_ANNUITY" />
                                      </Form.Group>

                                      <Form.Group as={Col} controlId="formGridCntFamMembers">
                                        <Form.Label>CNT_FAM_MEMBERS</Form.Label>
                                        <Form.Control placeholder="Enter CNT_FAM_MEMBERS" />
                                      </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridDaysLastPhoneChange">
                                      <Form.Label>DAYS_LAST_PHONE_CHANGE</Form.Label>
                                      <Form.Control placeholder="Enter DAYS_LAST_PHONE_CHANGE" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                      <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                  </Form>
                            <br />
                        </Tab>

                        <Tab eventKey="contact" title="Recherche" className="menu2">
                            <h6> Prédiction en recharchant son dossier - Research </h6>
                            <br />
                            <FormControl type="text" placeholder="Recherche..." className="mr-sm-2" />
                            <br />
                        </Tab>

                        <Tab eventKey="stat" title="Stats" className="menu2">
    
                                <Statistics />
                            <br />
                        </Tab>

                    </Tabs>

                    {solvable && (
                        <div className='solvable'>
                            <h1>votre cas est solvable</h1>
                        </div>
                    )}
                    
                    {nosolvable && (
                        <div className='NONsolvable'>
                            <h1>votre cas n'est pas solvable</h1>
                            <h6></h6>
                        </div>
                    )}

                    <Button variant="success" onClick={hasardOperation}>
                        Valider   
                    </Button>{' '}

                    
        </div>
      
    );
  }
  
  export default Prediction;