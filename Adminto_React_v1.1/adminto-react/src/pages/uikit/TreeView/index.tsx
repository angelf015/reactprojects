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

// Sample tree data
const basicNodes: TreeNode[] = [
    {
        text: "Parent 1",
        nodes: [
            { text: "Child 1" },
            { text: "Child 2" },
            {
                text: "Child 3",
                nodes: [
                    { text: "Grandchild 1" },
                    { text: "Grandchild 2" }
                ]
            }
        ]
    },
    { text: "Parent 2" },
    {
        text: "Parent 3",
        nodes: [
            { text: "Child 4" },
            { text: "Child 5" }
        ]
    }
];

const checkboxNodes: TreeNode[] = [
    {
        text: "Documents",
        nodes: [
            { text: "resume.pdf" },
            { text: "cover_letter.docx" },
            {
                text: "projects",
                nodes: [
                    { text: "project1.zip" },
                    { text: "project2.zip" }
                ]
            }
        ]
    },
    {
        text: "Images",
        nodes: [
            { text: "photo1.jpg" },
            { text: "photo2.png" }
        ]
    }
];

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
                        <h4 className="header-title">Basic Example</h4>
                        <p className="text-muted font-14">
                            Simple tree view with expandable nodes.
                        </p>

                        <SimpleTreeView nodes={basicNodes} />
                    </Card.Body>
                </Card>
            </Col>

            <Col md={6}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">With Files</h4>
                        <p className="text-muted font-14">
                            Tree view example with file structure.
                        </p>

                        <SimpleTreeView nodes={checkboxNodes} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TreeViewExample;
