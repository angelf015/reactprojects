import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

//components
import BaseVectorMap from './BaseVectorMap';

type UsaVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const UsaVectorMap = ({ width, height, options }: UsaVectorMapProps) => {
    return <BaseVectorMap width={width} height={height} options={options} type="world" />;
};

export default UsaVectorMap;
