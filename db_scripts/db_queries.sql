-- Dummy data for the database for testing.
INSERT INTO activitytype (name) VALUES
('Meeting'),
('Workshop'),
('Presentation');


INSERT INTO status (title, style) VALUES
('Pending', 'yellow'),
('In Progress', 'blue'),
('Completed', 'green');

INSERT INTO tag (name, color) VALUES
('Important', 'red'),
('Urgent', 'orange'),
('Low Priority', 'grey');

INSERT INTO activities (title, description, url, startdate, enddate, status, tags, activitytype) VALUES
('Team Meeting', 'Weekly team meeting to discuss project updates.', 'http://example.com/meeting', '2024-04-30', '2024-04-30', 2, '1', 'Meeting'),
('Product Demo', 'Demo session for the new product launch.', 'http://example.com/demo', '2024-05-10', '2024-05-10', 1, '1,2', 'Presentation'),
('Workshop on Time Management', 'A workshop to improve time management skills.', 'http://example.com/workshop', '2024-05-15', '2024-05-15', 0, '3', 'Workshop');

INSERT INTO tasks (name, content, startdate, enddate, tags, statusid, activityid) VALUES
('Prepare Agenda', 'Prepare agenda items for the team meeting.', '2024-04-29', '2024-04-30', '1', 1, 1),
('Send Invitations', 'Send meeting invitations to team members.', '2024-04-28', '2024-04-29', '1', 1, 1),
('Create Presentation Slides', 'Prepare slides for the product demo.', '2024-05-08', '2024-05-09', '1,2', 1, 2),
('Print Workshop Materials', 'Print handouts and materials for the workshop.', '2024-05-14', '2024-05-14', '3', 0, 3);
