import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

//components
import BaseVectorMap from './BaseVectorMap';

type IraqVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const IraqVectorMap = ({ width, height, options }: IraqVectorMapProps) => {
    return <BaseVectorMap width={width} height={height} options={options} type="world" />;
};

export default IraqVectorMap;
