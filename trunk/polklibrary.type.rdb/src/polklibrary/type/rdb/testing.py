# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import polklibrary.type.rdb


class PolklibraryTypeRdbLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        self.loadZCML(package=polklibrary.type.rdb)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'polklibrary.type.rdb:default')


POLKLIBRARY_TYPE_RDB_FIXTURE = PolklibraryTypeRdbLayer()


POLKLIBRARY_TYPE_RDB_INTEGRATION_TESTING = IntegrationTesting(
    bases=(POLKLIBRARY_TYPE_RDB_FIXTURE,),
    name='PolklibraryTypeRdbLayer:IntegrationTesting'
)


POLKLIBRARY_TYPE_RDB_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(POLKLIBRARY_TYPE_RDB_FIXTURE,),
    name='PolklibraryTypeRdbLayer:FunctionalTesting'
)


POLKLIBRARY_TYPE_RDB_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        POLKLIBRARY_TYPE_RDB_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='PolklibraryTypeRdbLayer:AcceptanceTesting'
)
