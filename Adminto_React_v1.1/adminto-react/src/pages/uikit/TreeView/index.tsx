import { Card, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';

// hooks
import { usePageTitle } from '../../../hooks';

// Simple tree node component for React 18 compatibility
type TreeNode = {
    text: string;
    nodes?: TreeNode[];
};

const SimpleTreeNode: React.FC<{ node: TreeNode; level?: number }> = ({ node, level = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    const hasChildren = node.nodes && node.nodes.length > 0;

    return (
        <div style={{ marginLeft: level * 20 }}>
            <div 
                className="d-flex align-items-center mb-1"
                style={{ cursor: hasChildren ? 'pointer' : 'default' }}
                onClick={() => hasChildren && setExpanded(!expanded)}
            >
                {hasChildren && (
                    <i className={`mdi mdi-chevron-${expanded ? 'down' : 'right'} me-1`}></i>
                )}
                {!hasChildren && <span className="me-3"></span>}
                <span>{node.text}</span>
            </div>
            {expanded && hasChildren && (
                <div>
                    {node.nodes!.map((childNode, index) => (
                        <SimpleTreeNode key={index} node={childNode} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const SimpleTreeView: React.FC<{ nodes: TreeNode[] }> = ({ nodes }) => {
    return (
        <div>
            {nodes.map((node, index) => (
                <SimpleTreeNode key={index} node={node} />
            ))}
        </div>
    );
};

// dummy data
import { basicNodes, checkboxNodes } from './data';

const TreeViewExample = () => {
    // set pagetitle
    usePageTitle({
        title: 'Tree View',
        breadCrumbItems: [
            {
                path: '/extended-ui/treeview',
                label: 'Extended UI',
            },
            {
                path: '/extended-ui/treeview',
                label: 'Tree View',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                <Dropdown.Item>Something Else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h4 className="header-title mt-0 mb-3">Basic Tree</h4>
                        <DeniReactTreeView items={basicNodes} showRoot />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                <Dropdown.Item>Something Else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h4 className="header-title mt-0 mb-3">Checkbox Tree</h4>
                        <DeniReactTreeView items={checkboxNodes} showCheckbox showRoot />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TreeViewExample;
