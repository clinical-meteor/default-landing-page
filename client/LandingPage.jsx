
import { Col, Grid, Row } from 'react-bootstrap';
import {
  Avatar,
  Card, 
  CardHeader, 
  CardText, 
  CardTitle,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';

import { FullPageCanvas, GlassCard, DynamicSpacer } from 'meteor/clinical:glass-ui';
import OrbitalGlyph from '../components/orbital/OrbitalGlyph';
import React from 'react';

var height = window.innerHeight;

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      description: ''
    };    
  }
  isSelected(index){
    return this.state.selected.indexOf(index) !== -1;
  }
  handleRowSelection(selectedRows){
    this.state.selected = selectedRows;
    console.log('this.state', this.state)
  }
  scrollToDynamicText(){
    // scrolltoElement({
    //   element: document.querySelector('#dynamicText'),
    //   offset: -100, // default is 0 
    //   bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1] 
    //   duration: 1000, // default is 100 
    //   then () {
    //     console.log('Finished~')
    //   }
    // });    
  }
  scrollToCore(){
    // scrolltoElement({
    //   element: document.querySelector('#coreModule'),
    //   offset: -100, // default is 0 
    //   bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1] 
    //   duration: 1000, // default is 100 
    //   then () {
    //     console.log('Finished~')
    //   }
    // });    
  }
  scrollToArchitectureCard(){    
    // scrolltoElement({
    //   element: document.querySelector('#architectureCard'),
    //   offset: -100, // default is 0 
    //   bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1] 
    //   duration: 1000, // default is 100 
    //   then () {
    //     console.log('Finished~')
    //   }
    // });
  }
  scrollToMeaningfulUse(){
    // scrolltoElement({
    //   element: document.querySelector('#meaningfulUseCard'),
    //   offset: -100, // default is 0 
    //   bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1] 
    //   duration: 1000, // default is 100 
    //   then () {
    //     console.log('Finished~')
    //   }
    // });    
  }
  scrollToPremiumModule(){
    // scrolltoElement({
    //   element: document.querySelector('#premiumModulesCard'),
    //   offset: -100, // default is 0 
    //   bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1] 
    //   duration: 1000, // default is 100 
    //   then () {
    //     console.log('Finished~')
    //   }
    // });        
  }
  render(){
    return(
      <div id="LandingPage" >
        <FullPageCanvas width='wide' >

          <Row>
            <Col md={4}>
              <GlassCard id='importCcd'  onClick={this.scrollToMeaningfulUse }>
                <CardTitle title="Welcome!" style={{textAlign: 'left'}} />
                <CardText style={{textAlign: 'left' }} >
                  <Row>
                  </Row>
                </CardText>
              </GlassCard>
              <DynamicSpacer />

              <GlassCard id='security' onClick={this.scrollToMeaningfulUse }>
                  <CardTitle title="Security:  Enable FileVault" style={{textAlign: 'left'}} />
                  <CardText style={{textAlign: 'left' }} >
                  <img src='/packages/clinical_default-landing-page/assets/FileVaultOff.png' style={{width: '100%'}} />

                  </CardText>
                </GlassCard>
              <DynamicSpacer />

              <GlassCard id='importCcd'  onClick={this.scrollToMeaningfulUse }>
                <CardTitle title="Data:  Importing a Continuity of Care Document" style={{textAlign: 'left'}} />
                <CardText style={{textAlign: 'left' }} >
                  <Row>
                    <Col mdOffset={3} md={6} style={{textAlign: 'left'}} >
                        
                    </Col>
                  </Row>
                </CardText>
              </GlassCard>
              <DynamicSpacer />

            </Col>
            <Col md={4}>
              <GlassCard id='importFacebookProfile' onClick={this.scrollToMeaningfulUse }>
                  <CardTitle title="Data: Exporting a Facebook Profile" style={{textAlign: 'left'}} />
                  <CardText style={{textAlign: 'left' }} >
                    <img src='/packages/clinical_default-landing-page/assets/FacebookExport.png' style={{width: '100%', filter: 'drop-shadow(4px 4px 5px lightgray)', marginLeft: '10px', marginRight: '10px'}} />
                  </CardText>
                </GlassCard>
                <DynamicSpacer />

                <GlassCard id='importCcd'  onClick={this.scrollToMeaningfulUse }>
                  <CardTitle title="Data:  Importing a Facebook Profile" style={{textAlign: 'left'}} />
                  <CardText style={{textAlign: 'left' }} >
                    <Row>
                      <Col mdOffset={3} md={6} style={{textAlign: 'left'}} >
                          
                      </Col>
                    </Row>
                  </CardText>
                </GlassCard>
              
            </Col>
            <Col md={4}>
                <GlassCard id='writingPlugins' onClick={this.scrollToMeaningfulUse }>
                  <CardTitle title="Writing A Plugin" subtitle="Welcome to Meteor on FHIR.  This is the default landing page.  Please read through the following materials to get started." style={{textAlign: 'left'}} />
                  <CardText style={{textAlign: 'left' }} >
                    <ul style={{textAlign: 'left'}}>
                        <li>Read the <a href="https://github.com/clinical-meteor/meteor-on-fhir">Meteor on FHIR README</a>.</li>
                        <li>Read through the <a href="https://github.com/clinical-meteor/software-development-kit/blob/master/documentation/getting.started.md">Clinical Meteor Quickstart to set up your development environment.</a> </li>
                        <li>Familiarize yourself with the <a href="https://guide.meteor.com/">Meteor Guide</a> to get started with developing Meteor.</li>
                        <li>Reference the <a href="https://github.com/clinical-meteor/software-development-kit">Software Development Kit as needed.</a> </li>
                        <li>Update the <a href="https://github.com/clinical-meteor/meteor-on-fhir/blob/development/webapp/packages/plugin-default-landing-page/client/FullPageCanvas.jsx">Landing Page</a> and replace with your custom content.</li>
                        <li>Copy and modify the <a href="https://github.com/clinical-meteor/meteor-on-fhir/tree/development/webapp/packages/plugin-default-landing-page">Default Landing Page Plugin</a> to create your first plugin.</li>                      
                      </ul>
                  </CardText>
                </GlassCard>
            </Col>
        </Row>

       
          
          <br />
          <br />
          <br />
          <br />
          
        </FullPageCanvas>
      </div>
    );
  }
}
export default LandingPage;