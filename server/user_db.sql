CREATE TABLE `users`(
	`user_id` int unsigned auto_increment,
	`user_name` varchar(100) not null,
	`password` varchar(100) not null,
	primary key(`user_id`)
)engine=InnoDB DEFAULT CHARSET=utf8;

insert into 
`users`(user_name, password)
values('danker', '123456'),
			('saber', '123456')
;