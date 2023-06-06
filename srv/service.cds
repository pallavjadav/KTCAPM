using ironman from '../db/schema';

service MarvelEnterprise {
    entity CaptainCool as projection on ironman.Employees;
}