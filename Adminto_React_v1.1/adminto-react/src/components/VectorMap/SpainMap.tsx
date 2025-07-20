import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

//components
import BaseVectorMap from './BaseVectorMap';

type SpainVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const SpainVectorMap = ({ width, height, options }: SpainVectorMapProps) => {
    return <BaseVectorMap width={width} height={height} options={options} type="world" />;
};

export default SpainVectorMap;
