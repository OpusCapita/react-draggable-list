import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { theme } from '@opuscapita/oc-cm-common-layouts';

// App imports
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={12} md={12} lg={12}>
        <Row>
          <Col xs={10}>
            <h3>React component template</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-component-template"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <ThemeProvider theme={theme}>
            <ExampleComponent />
          </ThemeProvider>
        </Panel>
      </Col>
    </Row>
  </Grid>
);
