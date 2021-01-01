import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockPostsData1608967243648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    insert into post (title, text, "creatorId", "createdAt") values ('Unknown Pleasures (Ren xiao yao)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 10, '2020-09-21T00:36:18Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Southland Tales', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 10, '2020-06-06T12:48:14Z');
    insert into post (title, text, "creatorId", "createdAt") values ('The Loft', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, '2020-06-05T19:12:03Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Val Lewton:  The Man in the Shadows', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 10, '2020-05-09T16:09:01Z');
    insert into post (title, text, "creatorId", "createdAt") values ('First a Girl', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 10, '2020-10-20T22:00:32Z');
    insert into post (title, text, "creatorId", "createdAt") values ('My Dear Secretary', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, '2020-03-20T01:16:48Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Roula', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 10, '2020-08-26T18:45:09Z');
    insert into post (title, text, "creatorId", "createdAt") values ('New Orleans Uncensored', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-12-25T18:25:03Z');
    insert into post (title, text, "creatorId", "createdAt") values ('House on Carroll Street, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 10, '2020-01-08T01:06:48Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Head Office', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 10, '2020-11-25T14:09:27Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Walk, Don''t Run', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 10, '2020-06-12T17:20:50Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Family Business', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, '2020-08-02T06:26:24Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Rock the Boat', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 10, '2020-09-19T16:35:14Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Land of the Lost', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, '2020-08-12T16:23:38Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Pompatus of Love, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, '2020-10-04T07:18:27Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Cecil B. DeMented', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 10, '2020-02-14T10:27:09Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Irreversible (Irréversible)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 10, '2020-05-06T20:38:44Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Henry''s Crime', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, '2020-09-22T15:29:10Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Zatoichi in Desperation (Shin Zatôichi monogatari: Oreta tsue) (Zatôichi 24)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 10, '2020-02-06T19:44:48Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Roberto Succo', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, '2020-03-19T12:39:48Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Million Dollar Mystery', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, '2020-06-20T22:21:47Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Our Summer in Provence', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 10, '2020-08-28T23:51:46Z');
    insert into post (title, text, "creatorId", "createdAt") values ('JFK: The Smoking Gun', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 10, '2020-08-09T08:25:59Z');
    insert into post (title, text, "creatorId", "createdAt") values ('911 in Plane Site', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 10, '2020-09-13T00:56:31Z');
    insert into post (title, text, "creatorId", "createdAt") values ('What Would Jesus Buy?', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 10, '2020-02-02T20:55:34Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Magic Magic', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 10, '2020-03-02T11:59:13Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Heaven Knows, Mr. Allison', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 10, '2020-03-27T03:55:36Z');
    insert into post (title, text, "creatorId", "createdAt") values ('My Little Pony: Equestria Girls', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 10, '2020-06-03T03:01:14Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Madhouse', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 10, '2020-03-19T05:46:34Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Three Smart Girls', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 10, '2020-10-26T22:09:23Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Jodhaa Akbar', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 10, '2020-03-21T13:48:18Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Wild One, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, '2020-06-26T05:43:05Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Awakenings', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 10, '2020-04-10T13:38:22Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Fright Night 2: New Blood', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 10, '2020-01-28T12:00:54Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Envy (Kiskanmak)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 10, '2020-09-24T03:20:59Z');
    insert into post (title, text, "creatorId", "createdAt") values ('The Great Raid', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 10, '2020-07-23T02:46:26Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Stuart Little 3: Call of the Wild', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 10, '2020-06-12T02:25:30Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Shining Through', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 10, '2020-10-14T00:28:25Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Missing in Action 2: The Beginning', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, '2020-01-18T05:30:45Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Atomic Brain, The', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 10, '2020-01-25T06:08:13Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Heart Is a Lonely Hunter, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 10, '2020-10-30T00:06:02Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Ice Poison', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 10, '2019-12-27T07:29:13Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Glass Web, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 10, '2019-12-26T16:30:11Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Kill the Messenger', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 10, '2020-04-17T07:51:10Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Hey Arnold! The Movie', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, '2020-02-03T20:35:27Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Steal This Movie!', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 10, '2020-08-22T06:39:31Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Calamity Jane', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, '2020-04-09T16:15:54Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Missing Person, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, '2020-01-18T15:53:05Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Okie Noodling', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-01-14T22:29:19Z');
    insert into post (title, text, "creatorId", "createdAt") values ('To Cross the Rubicon', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 10, '2020-03-25T22:28:30Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Tevye', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 10, '2020-08-15T09:26:44Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Art & Copy', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 10, '2020-09-12T02:51:45Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Young Again', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-01-26T23:03:43Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Lifeforce', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 10, '2020-02-12T19:00:22Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Adjuster, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-05-08T18:00:36Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Malcolm X', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 10, '2020-02-15T17:16:28Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Blue Vinyl', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, '2020-02-24T13:18:03Z');
    insert into post (title, text, "creatorId", "createdAt") values ('How the West Was Fun', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 10, '2020-04-07T15:51:14Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Two: The Story of Roman & Nyro', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 10, '2020-05-14T21:45:38Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Girl in the Park, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 10, '2020-11-07T07:45:27Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Corporation, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-11-11T14:30:45Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Alien: Resurrection', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 10, '2020-10-23T15:05:18Z');
    insert into post (title, text, "creatorId", "createdAt") values ('The Connection', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 10, '2020-06-05T03:04:01Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Inside Daisy Clover', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 10, '2020-09-07T22:38:02Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Beat Street', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, '2020-09-06T02:50:09Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Marathon Family, The (Maratonci Trce Pocasni Krug)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 10, '2020-01-02T16:02:32Z');
    insert into post (title, text, "creatorId", "createdAt") values ('When Marnie Was There', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, '2020-04-04T00:02:56Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Mountain Men, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 10, '2020-12-03T12:17:39Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Nature of Existence, The', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-07-07T04:37:52Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Margaret Thatcher: The Long Walk to Finchley', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, '2020-09-28T08:17:34Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Trials of Cate McCall, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 10, '2020-02-14T21:08:37Z');
    insert into post (title, text, "creatorId", "createdAt") values ('World of Apu, The (Apur Sansar)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, '2020-03-29T11:17:01Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Hairspray', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 10, '2019-12-29T05:43:35Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Cold Weather', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 10, '2020-09-22T23:25:10Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Charlie, the Lonesome Cougar', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 10, '2020-07-03T20:53:03Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Crippled Avengers (Can que) (Return of the 5 Deadly Venoms)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 10, '2020-06-03T11:14:51Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Lesbian Vampire Killers', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 10, '2020-02-20T17:41:09Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Haider', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 10, '2020-10-31T15:47:57Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Great White Hope, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 10, '2020-04-21T13:57:10Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Man Who Couldn''t Say No, The (Mies joka ei osannut sanoa EI)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 10, '2020-10-17T07:56:05Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Jodhaa Akbar', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 10, '2020-10-29T08:24:34Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Flying Down to Rio', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 10, '2020-06-27T20:34:20Z');
    insert into post (title, text, "creatorId", "createdAt") values ('The Conrad Boys', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 10, '2020-02-21T14:53:22Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Chasing Ice', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, '2020-09-04T14:50:07Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Demonic Toys', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 10, '2020-03-17T04:21:54Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Masters of the Universe', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 10, '2020-02-06T01:33:39Z');
    insert into post (title, text, "creatorId", "createdAt") values ('House of Cards', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, '2020-02-03T18:37:12Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Wittgenstein', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 10, '2020-12-11T02:28:23Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Powaqqatsi', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 10, '2020-02-22T17:27:52Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Devil Commands, The', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, '2020-02-25T03:06:15Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Legend of the Fist: The Return of Chen Zhen (Jing wu feng yun: Chen Zhen)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 10, '2020-10-07T10:11:52Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Aladdin and the King of Thieves', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 10, '2020-03-03T18:20:37Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Wages of Fear, The (Salaire de la peur, Le)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 10, '2020-05-09T14:10:17Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Exporting Raymond', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 10, '2020-11-16T00:19:59Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Tremors', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 10, '2020-08-15T13:35:09Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Nömadak TX', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 10, '2020-10-30T09:11:02Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Safe Men', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 10, '2020-01-06T23:45:53Z');
    insert into post (title, text, "creatorId", "createdAt") values ('State Fair', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, '2020-05-13T15:11:47Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Cinderella Liberty', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 10, '2020-02-08T03:39:07Z');
    insert into post (title, text, "creatorId", "createdAt") values ('Slight Case of Murder, A', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 10, '2020-10-13T09:59:29Z');    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM post');
  }
}
