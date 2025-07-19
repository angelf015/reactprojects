import React, { useRef, useState, useCallback } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../hooks';

// Simple placeholder components for Google Maps since the original library is incompatible
const MapPlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div 
        style={{ 
            height: '350px', 
            width: '100%', 
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #dee2e6',
            borderRadius: '4px'
        }}
    >
        <div className="text-center">
            <i className="mdi mdi-map-outline" style={{ fontSize: '48px', color: '#6c757d' }}></i>
            <p className="mt-2 text-muted">{title}</p>
            <small className="text-muted">Google Maps integration placeholder</small>
        </div>
    </div>
);

const BasicMap = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Basic</h4>
                <div id="gmaps-basic" style={{ position: 'relative' }} className="gmaps">
                    <MapPlaceholder title="Basic Google Map" />
                </div>
            </Card.Body>
        </Card>
    );
};

const WithMarkers = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Markers</h4>
                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <MapPlaceholder title="Google Map with Markers" />
                </div>
            </Card.Body>
        </Card>
    );
};

const StreetViewMap = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Street View Panoramas Google Map</h4>
                <div id="panorama" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <MapPlaceholder title="Street View Panorama" />
                </div>
            </Card.Body>
        </Card>
    );
};

const ClickableMarkers = () => {
    const onMarkerClick = useCallback(() => {
        alert('Marker clicked!');
    }, []);

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Clickable Markers</h4>
                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <MapPlaceholder title="Clickable Markers Map" />
                    <div className="text-center mt-2">
                        <button className="btn btn-sm btn-outline-primary" onClick={onMarkerClick}>
                            Test Marker Click
                        </button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

const GoogleMaps = () => {
    // set pagetitle
    usePageTitle({
        title: 'Google Maps',
        breadCrumbItems: [
            {
                path: '/maps/google',
                label: 'Maps',
            },
            {
                path: '/maps/google',
                label: 'Google Maps',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col lg={6}>
                    <BasicMap />
                </Col>

                <Col lg={6}>
                    <WithMarkers />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <StreetViewMap />
                </Col>
                <Col lg={6}>
                    <ClickableMarkers />
                </Col>
            </Row>
        </>
    );
};

export default GoogleMaps;
