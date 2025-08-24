import { CheatSheet } from '../types';
import { gitCheatSheets } from './cheatsheets/git';
import { dockerCheatSheets } from './cheatsheets/docker';
import { dockerfileCheatSheets } from './cheatsheets/dockerfile';
import { sqlCheatSheets } from './cheatsheets/sql';
import { shellCheatSheets } from './cheatsheets/shell';
import { pythonCheatSheets } from './cheatsheets/python';
import { restCheatSheets } from './cheatsheets/rest';
import { mavenCheatSheets } from './cheatsheets/maven';
import { springCheatSheets } from './cheatsheets/spring';
import { springMvcCheatSheets } from './cheatsheets/springMvc';
import { springBootCheatSheets } from './cheatsheets/springBoot';
import { java8CheatSheets } from './cheatsheets/java8';
import { managementCheatSheets } from './cheatsheets/management';
import { aiCheatSheets } from './cheatsheets/ai';
import { springAiCheatSheets } from './cheatsheets/springAi';
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
import { nodejsCheatSheets } from './cheatsheets/nodejs';
import { securityCheatSheets } from './cheatsheets/security';
import { algorithmsCheatSheets } from './cheatsheets/algorithms';
import { dataStructuresCheatSheets } from './cheatsheets/datastructures';
import { protocolsCheatSheets } from './cheatsheets/protocols';
import { systemArchitectureCheatSheets } from './cheatsheets/systemarchitecture';
import { serversCheatSheets } from './cheatsheets/servers';
import { junitCheatSheets } from './cheatsheets/junit';
import { oauthSsoCheatSheets } from './cheatsheets/oauthsso';
import { cicdMonitoringCheatSheets } from './cheatsheets/cicdmonitoring';
import { javaBasicsCheatSheets } from './cheatsheets/java-basics';

export const initialData: CheatSheet[] = [
  ...gitCheatSheets,
  ...dockerCheatSheets,
  ...dockerfileCheatSheets,
  ...kubernetesCheatSheets,
  ...sqlCheatSheets,
  ...shellCheatSheets,
  ...pythonCheatSheets,
  ...javascriptCheatSheets,
  ...nodejsCheatSheets,
  ...angularCheatSheets,
  ...regexCheatSheets,
  ...cssCheatSheets,
  ...restCheatSheets,
  ...mavenCheatSheets,
  ...springCheatSheets,
  ...springMvcCheatSheets,
  ...springBootCheatSheets,
  ...java8CheatSheets,
  ...javaBasicsCheatSheets,
  ...managementCheatSheets,
  ...aiCheatSheets,
  ...springAiCheatSheets,
  ...networkingCheatSheets,
  ...protocolsCheatSheets,
  ...awsCheatSheets,
  ...npmCheatSheets,
  ...pipCheatSheets,
  ...mongoDbCheatSheets,
  ...securityCheatSheets,
  ...algorithmsCheatSheets,
  ...dataStructuresCheatSheets,
  ...systemArchitectureCheatSheets,
  ...serversCheatSheets,
  ...junitCheatSheets,
  ...oauthSsoCheatSheets,
  ...cicdMonitoringCheatSheets,
];