import { CheatSheet } from '../types';
import { gitCheatSheets } from './cheatsheets/git';
import { dockerCheatSheets } from './cheatsheets/docker';
import { sqlCheatSheets } from './cheatsheets/sql';
import { pythonCheatSheets } from './cheatsheets/python';
import { restCheatSheets } from './cheatsheets/rest';
import { mavenCheatSheets } from './cheatsheets/maven';
import { springCheatSheets } from './cheatsheets/spring';
import { managementCheatSheets } from './cheatsheets/management';
import { aiCheatSheets } from './cheatsheets/ai';
import { kubernetesCheatSheets } from './cheatsheets/kubernetes';
import { cssCheatSheets } from './cheatsheets/css';
import { angularCheatSheets } from './cheatsheets/angular';
import { javascriptCheatSheets } from './cheatsheets/javascript';
import { regexCheatSheets } from './cheatsheets/regex';
import { networkingCheatSheets } from './cheatsheets/networking';
import { awsCheatSheets } from './cheatsheets/aws';
import { npmCheatSheets } from './cheatsheets/npm';
import { pipCheatSheets } from './cheatsheets/pip';
import { mongoDbCheatSheets } from './cheatsheets/mongodb';
import { redisCheatSheets } from './cheatsheets/redis';
import { nodejsCheatSheets } from './cheatsheets/nodejs';
import { securityCheatSheets } from './cheatsheets/security';
import { algorithmsCheatSheets } from './cheatsheets/algorithms';
import { dataStructuresCheatSheets } from './cheatsheets/datastructures';
import { systemArchitectureCheatSheets } from './cheatsheets/systemarchitecture';
import { serversCheatSheets } from './cheatsheets/servers';
import { junitCheatSheets } from './cheatsheets/junit';
import { javaCheatSheets } from './cheatsheets/java';
import { cicdCheatSheets } from './cheatsheets/cicd';
import { shellCheatSheets } from './cheatsheets/shell';
import { reactCheatSheets } from './cheatsheets/react';
import { gcpCheatSheets } from './cheatsheets/gcp';
import { terraformCheatSheets } from './cheatsheets/terraform';
import { jestCheatSheets } from './cheatsheets/jest';
import { designPatternsCheatSheets } from './cheatsheets/designpatterns';
import { goCheatSheets } from './cheatsheets/go';

const allData: CheatSheet[] = [
  ...aiCheatSheets,
  ...algorithmsCheatSheets,
  ...angularCheatSheets,
  ...awsCheatSheets,
  ...cicdCheatSheets,
  ...shellCheatSheets, // Consolidated from shell & linux
  ...cssCheatSheets,
  ...dataStructuresCheatSheets,
  ...designPatternsCheatSheets, // New
  ...dockerCheatSheets, // Consolidated from docker & dockerfile
  ...gitCheatSheets,
  ...goCheatSheets, // New
  ...gcpCheatSheets, // New
  ...javaCheatSheets, // Consolidated from java, java-basics, java8
  ...javascriptCheatSheets,
  ...jestCheatSheets, // New
  ...junitCheatSheets,
  ...kubernetesCheatSheets,
  ...managementCheatSheets,
  ...mavenCheatSheets,
  ...mongoDbCheatSheets,
  ...networkingCheatSheets, // Consolidated from networking & protocols
  ...nodejsCheatSheets,
  ...npmCheatSheets,
  ...pipCheatSheets,
  ...pythonCheatSheets,
  ...reactCheatSheets, // New
  ...redisCheatSheets,
  ...regexCheatSheets,
  ...restCheatSheets,
  ...securityCheatSheets, // Consolidated from security & oauth
  ...serversCheatSheets,
  ...springCheatSheets, // Consolidated from spring, springmvc, springboot, springai
  ...sqlCheatSheets,
  ...systemArchitectureCheatSheets,
  ...terraformCheatSheets, // New
];

// Sort by category, then by title for a consistent order
allData.sort((a, b) => {
    if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
    if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
});

export const initialData: CheatSheet[] = allData;
